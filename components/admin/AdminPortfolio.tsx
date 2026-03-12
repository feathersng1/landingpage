import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { supabase, PortfolioItem } from '../../lib/supabase';
import { toast } from 'sonner';

export function AdminPortfolio() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image_url: '',
    client_name: '',
    project_year: new Date().getFullYear(),
    tags: '',
    featured: false,
    slug: ''
  });

  useEffect(() => {
    fetchPortfolio();
  }, []);

  async function fetchPortfolio() {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPortfolio(data || []);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      toast.error('Failed to load portfolio items');
    } finally {
      setLoading(false);
    }
  }

  function handleEdit(item: PortfolioItem) {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description || '',
      category: item.category,
      image_url: item.image_url,
      client_name: item.client_name,
      project_year: item.project_year,
      tags: item.tags.join(', '),
      featured: item.featured,
      slug: item.slug
    });
    setShowForm(true);
  }

  function resetForm() {
    setEditingItem(null);
    setFormData({
      title: '',
      description: '',
      category: '',
      image_url: '',
      client_name: '',
      project_year: new Date().getFullYear(),
      tags: '',
      featured: false,
      slug: ''
    });
    setShowForm(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(Boolean);

    const portfolioData = {
      title: formData.title,
      description: formData.description,
      category: formData.category,
      image_url: formData.image_url,
      client_name: formData.client_name,
      project_year: formData.project_year,
      tags: tagsArray,
      featured: formData.featured,
      slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    };

    try {
      if (editingItem) {
        const { error } = await supabase
          .from('portfolio_items')
          .update(portfolioData)
          .eq('id', editingItem.id);

        if (error) throw error;
        toast.success('Portfolio item updated successfully');
      } else {
        const { error } = await supabase
          .from('portfolio_items')
          .insert([portfolioData]);

        if (error) throw error;
        toast.success('Portfolio item created successfully');
      }

      fetchPortfolio();
      resetForm();
    } catch (error) {
      console.error('Error saving portfolio item:', error);
      toast.error('Failed to save portfolio item');
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this portfolio item?')) return;

    try {
      const { error } = await supabase
        .from('portfolio_items')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Portfolio item deleted successfully');
      fetchPortfolio();
    } catch (error) {
      console.error('Error deleting portfolio item:', error);
      toast.error('Failed to delete portfolio item');
    }
  }

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Portfolio Management</h1>
        <Button onClick={() => setShowForm(true)}>Add New Project</Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{editingItem ? 'Edit Project' : 'Add New Project'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="client_name">Client Name</Label>
                  <Input
                    id="client_name"
                    value={formData.client_name}
                    onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="project_year">Project Year</Label>
                  <Input
                    id="project_year"
                    type="number"
                    value={formData.project_year}
                    onChange={(e) => setFormData({ ...formData, project_year: parseInt(e.target.value) })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="image_url">Image URL</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="Auto-generated if empty"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="web design, branding, mobile"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked: any) => setFormData({ ...formData, featured: checked })}
                />
                <Label htmlFor="featured">Featured Project</Label>
              </div>

              <div className="flex gap-2">
                <Button type="submit">{editingItem ? 'Update' : 'Create'} Project</Button>
                <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.client_name} • {item.project_year}</p>
              <p className="text-sm mb-3">{item.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {item.featured && (
                  <Badge className="text-xs">Featured</Badge>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
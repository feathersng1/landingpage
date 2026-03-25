import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { supabase, Testimonial } from '../../lib/supabase';
import { toast } from 'sonner';

export function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    client_name: '',
    client_role: '',
    client_company: '',
    content: '',
    rating: 5,
    featured: true
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      toast.error('Failed to load testimonials');
    } finally {
      setLoading(false);
    }
  }

  function handleEdit(testimonial: Testimonial) {
    setEditingTestimonial(testimonial);
    setFormData({
      client_name: testimonial.client_name,
      client_role: testimonial.client_role,
      client_company: testimonial.client_company,
      content: testimonial.content,
      rating: testimonial.rating,
      featured: testimonial.featured
    });
    setShowForm(true);
  }

  function resetForm() {
    setEditingTestimonial(null);
    setFormData({
      client_name: '',
      client_role: '',
      client_company: '',
      content: '',
      rating: 5,
      featured: true
    });
    setShowForm(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const testimonialData = {
      client_name: formData.client_name,
      client_role: formData.client_role,
      client_company: formData.client_company,
      content: formData.content,
      rating: formData.rating,
      featured: formData.featured
    };

    try {
      if (editingTestimonial) {
        const { error } = await supabase
          .from('testimonials')
          .update(testimonialData)
          .eq('id', editingTestimonial.id);
        
        if (error) throw error;
        toast.success('Testimonial updated successfully');
      } else {
        const { error } = await supabase
          .from('testimonials')
          .insert([testimonialData]);
        
        if (error) throw error;
        toast.success('Testimonial created successfully');
      }
      
      fetchTestimonials();
      resetForm();
    } catch (error) {
      console.error('Error saving testimonial:', error);
      toast.error('Failed to save testimonial');
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Testimonial deleted successfully');
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      toast.error('Failed to delete testimonial');
    }
  }

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Testimonials Management</h2>
        <Button onClick={() => setShowForm(true)}>New Testimonial</Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="client_name">Client Name</Label>
                  <Input
                    id="client_name"
                    value={formData.client_name}
                    onChange={(e) => setFormData({...formData, client_name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="client_role">Role / Position</Label>
                  <Input
                    id="client_role"
                    value={formData.client_role}
                    onChange={(e) => setFormData({...formData, client_role: e.target.value})}
                    placeholder="CEO, Marketing Manager, etc."
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="client_company">Company</Label>
                  <Input
                    id="client_company"
                    value={formData.client_company}
                    onChange={(e) => setFormData({...formData, client_company: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="rating">Rating (1-5)</Label>
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="content">Testimonial Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    rows={4}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => setFormData({...formData, featured: checked})}
                  />
                  <Label htmlFor="featured">Featured Testimonial</Label>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button type="submit">{editingTestimonial ? 'Update' : 'Create'} Testimonial</Button>
                <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t) => (
          <Card key={t.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{t.client_name}</h3>
                  <p className="text-xs text-gray-500">{t.client_role} at {t.client_company}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm italic mb-4">"{t.content}"</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(t)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(t.id)}
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

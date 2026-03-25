import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { supabase, TeamMember } from '../../lib/supabase';
import { toast } from 'sonner';

export function AdminTeam() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    image_url: '',
    linkedin_url: '',
    twitter_url: '',
    email: '',
    featured: true,
    order_index: 0
  });

  useEffect(() => {
    fetchTeam();
  }, []);

  async function fetchTeam() {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setTeam(data || []);
    } catch (error) {
      console.error('Error fetching team:', error);
      toast.error('Failed to load team members');
    } finally {
      setLoading(false);
    }
  }

  function handleEdit(member: TeamMember) {
    setEditingMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      bio: member.bio,
      image_url: member.image_url,
      linkedin_url: member.linkedin_url || '',
      twitter_url: member.twitter_url || '',
      email: member.email || '',
      featured: member.featured,
      order_index: member.order_index
    });
    setShowForm(true);
  }

  function resetForm() {
    setEditingMember(null);
    setFormData({
      name: '',
      role: '',
      bio: '',
      image_url: '',
      linkedin_url: '',
      twitter_url: '',
      email: '',
      featured: true,
      order_index: team.length
    });
    setShowForm(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const memberData = {
      name: formData.name,
      role: formData.role,
      bio: formData.bio,
      image_url: formData.image_url,
      linkedin_url: formData.linkedin_url || null,
      twitter_url: formData.twitter_url || null,
      email: formData.email || null,
      featured: formData.featured,
      order_index: formData.order_index
    };

    try {
      if (editingMember) {
        const { error } = await supabase
          .from('team_members')
          .update(memberData)
          .eq('id', editingMember.id);
        
        if (error) throw error;
        toast.success('Team member updated successfully');
      } else {
        const { error } = await supabase
          .from('team_members')
          .insert([memberData]);
        
        if (error) throw error;
        toast.success('Team member created successfully');
      }
      
      fetchTeam();
      resetForm();
    } catch (error) {
      console.error('Error saving team member:', error);
      toast.error('Failed to save team member');
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this team member?')) return;

    try {
      const { error } = await supabase
        .from('team_members')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Team member deleted successfully');
      fetchTeam();
    } catch (error) {
      console.error('Error deleting team member:', error);
      toast.error('Failed to delete team member');
    }
  }

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Team Management</h2>
        <Button onClick={() => setShowForm(true)}>Add Member</Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{editingMember ? 'Edit Member' : 'Add New Member'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="role">Role / Title</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    placeholder="CEO, Lead Designer, etc."
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="image_url">Photo URL</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin_url">LinkedIn URL (optional)</Label>
                  <Input
                    id="linkedin_url"
                    value={formData.linkedin_url}
                    onChange={(e) => setFormData({...formData, linkedin_url: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="order_index">Display Order</Label>
                  <Input
                    id="order_index"
                    type="number"
                    value={formData.order_index}
                    onChange={(e) => setFormData({...formData, order_index: parseInt(e.target.value)})}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2 pt-6">
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => setFormData({...formData, featured: checked})}
                  />
                  <Label htmlFor="featured">Featured Member</Label>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button type="submit">{editingMember ? 'Update' : 'Create'} Member</Button>
                <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map((member) => (
          <Card key={member.id}>
            <CardContent className="p-4">
              <div className="flex gap-4 items-center mb-3">
                <img
                  src={member.image_url}
                  alt={member.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
              <p className="text-sm line-clamp-2 mb-4">{member.bio}</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(member)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(member.id)}
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

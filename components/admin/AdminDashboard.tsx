import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { AdminPortfolio } from './AdminPortfolio';
import { AdminBlog } from './AdminBlog';
import { AdminServices } from './AdminServices';
import { AdminTeam } from './AdminTeam';
import { AdminTestimonials } from './AdminTestimonials';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export function AdminDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Feathers Admin Dashboard</h1>
          <p className="text-muted-foreground">
            For Managing website content, portfolio, team, and testimonials.
          </p>
        </div>

        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="mb-8 w-full justify-start overflow-x-auto">
            <TabsTrigger value="portfolio" className="px-8">Portfolio</TabsTrigger>
            <TabsTrigger value="blog" className="px-8">Blog Posts</TabsTrigger>
            <TabsTrigger value="services" className="px-8">Services</TabsTrigger>
            <TabsTrigger value="team" className="px-8">Team</TabsTrigger>
            <TabsTrigger value="testimonials" className="px-8">Testimonials</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio">
            <div className="space-y-4">
              <AdminPortfolio />
            </div>
          </TabsContent>

          <TabsContent value="blog">
            <div className="space-y-4">
              <AdminBlog />
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="space-y-4">
              <AdminServices />
            </div>
          </TabsContent>

          <TabsContent value="team">
            <div className="space-y-4">
              <AdminTeam />
            </div>
          </TabsContent>

          <TabsContent value="testimonials">
            <div className="space-y-4">
              <AdminTestimonials />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

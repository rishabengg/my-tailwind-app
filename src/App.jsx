import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, Package, Star } from "lucide-react";
import { motion } from "framer-motion";

// Homepage component
function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-800">
      <header className="p-6 flex justify-between items-center shadow-md bg-white">
        <h1 className="text-2xl font-bold">Kacher Hardware</h1>
        <nav className="space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Products</Button>
          <Button variant="ghost">Contact</Button>
        </nav>
      </header>

      <main className="text-center px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold mb-4"
        >
          Building Trust, One Hinge at a Time
        </motion.h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Welcome to Kacher – your reliable partner for high-quality, durable hardware. We bring strength to every structure.
        </p>
        <Button size="lg">Explore Products</Button>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <Package className="w-8 h-8 mb-2 text-primary" />
              <h3 className="font-semibold text-xl mb-2">Durable Materials</h3>
              <p>We use only the highest-grade metals to ensure long-lasting products.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <Star className="w-8 h-8 mb-2 text-primary" />
              <h3 className="font-semibold text-xl mb-2">Trusted by Experts</h3>
              <p>Used by professionals across India for reliable performance.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <Menu className="w-8 h-8 mb-2 text-primary" />
              <h3 className="font-semibold text-xl mb-2">Wide Range</h3>
              <p>From hinges to handles, we offer everything your hardware needs.</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="p-4 text-center text-gray-500 border-t mt-16">
        © 2025 Kacher Hardware. All rights reserved.
      </footer>
    </div>
  );
}

// Dashboard Layout component
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <Button variant="ghost" className="text-white w-full text-left">Flow</Button>
          <Button variant="ghost" className="text-white w-full text-left">Inventory</Button>
          <Button variant="ghost" className="text-white w-full text-left">Analytics</Button>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  );
}

// Dashboard Page component
function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Welcome to the FMS Dashboard</h1>
      <p>This is where you'll track flows, inventory, and analytics.</p>
    </DashboardLayout>
  );
}

// App Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

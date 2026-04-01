import React from 'react';
import { useShop } from '../context/ShopContext';
import { Package, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react';

export default function AdminDashboard() {
  const { orders, updateOrderStatus } = useShop();

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = orders.filter(o => o.status === 'Pending').length;

  return (
    <div className="bg-bakery-light min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-bakery-choco mb-8">
          Admin Dashboard
        </h1>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            title="Total Revenue" 
            value={`$${totalRevenue.toFixed(2)}`} 
            icon={<DollarSign className="text-bakery-rose" />} 
          />
          <StatCard 
            title="Total Orders" 
            value={orders.length} 
            icon={<Package className="text-bakery-rose" />} 
          />
          <StatCard 
            title="Pending Orders" 
            value={pendingOrders} 
            icon={<Clock className="text-bakery-rose" />} 
            highlight={pendingOrders > 0}
          />
          <StatCard 
            title="Customers" 
            value={new Set(orders.map(o => o.customer.email)).size} 
            icon={<Users className="text-bakery-rose" />} 
          />
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-bakery-choco/5 overflow-hidden">
          <div className="px-6 py-5 border-b border-bakery-choco/10 flex justify-between items-center bg-bakery-pink/20">
            <h2 className="text-xl font-bold text-bakery-choco">Recent Orders</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bakery-light/50 text-bakery-mocha text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Order ID</th>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Items</th>
                  <th className="px-6 py-4 font-medium">Total</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bakery-choco/5">
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-bakery-mocha">
                      No orders found.
                    </td>
                  </tr>
                ) : (
                  orders.map(order => (
                    <tr key={order.id} className="hover:bg-bakery-light/30 transition-colors">
                      <td className="px-6 py-4 font-mono text-sm font-medium text-bakery-choco">
                        {order.id}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-bakery-choco">{order.customer.name}</div>
                        <div className="text-xs text-bakery-mocha mt-1">{order.customer.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-bakery-mocha">
                        {order.items.length} items
                      </td>
                      <td className="px-6 py-4 font-bold text-bakery-choco">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                          order.status === 'Pending' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {order.status === 'Pending' ? <Clock size={12} /> : <CheckCircle size={12} />}
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {order.status === 'Pending' && (
                          <button 
                            onClick={() => updateOrderStatus(order.id, 'Completed')}
                            className="bg-bakery-rose text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-opacity-90 transition-colors shadow-sm"
                          >
                            Mark Completed
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ title, value, icon, highlight }) {
  return (
    <div className={`bg-white p-6 rounded-3xl border shadow-sm flex items-center gap-4 transition-all ${highlight ? 'border-bakery-rose/50 shadow-bakery-rose/10' : 'border-bakery-choco/5'}`}>
      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${highlight ? 'bg-bakery-pink text-bakery-rose' : 'bg-bakery-light text-bakery-mocha'}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-bakery-mocha mb-1">{title}</h3>
        <p className={`text-2xl font-bold ${highlight ? 'text-bakery-rose' : 'text-bakery-choco'}`}>{value}</p>
      </div>
    </div>
  );
}

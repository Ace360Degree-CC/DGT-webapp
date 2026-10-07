import React from "react";
import { Plus } from "lucide-react";

export default function AssetsInventoryView() {
  const assets = [
    { item: "DGT Guard Uniform Kits (Shirt + Trousers)", totalStock: 450, issued: 390, available: 60, status: "Normal" },
    { item: "Security Baton / Lathi", totalStock: 200, issued: 185, available: 15, status: "Low Stock Alert" },
    { item: "Metal Detector Wand (Garrett)", totalStock: 50, issued: 42, available: 8, status: "Normal" },
    { item: "Walkie-Talkie Sets (Motorola)", totalStock: 80, issued: 78, available: 2, status: "Critical Low" }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="glass-panel" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Assets, Uniform Kits & Equipment Inventory</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>Uniform issue tracking, asset recovery on guard exit & low inventory alerts.</p>
        </div>
        <button className="btn-primary"><Plus size={16} /> Issue Kit to Guard</button>
      </div>

      <div className="glass-panel" style={{ padding: '24px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', textAlign: 'left' }}>
              <th style={{ padding: '10px 12px' }}>Equipment / Kit Name</th>
              <th style={{ padding: '10px 12px', textAlign: 'center' }}>Total Stock</th>
              <th style={{ padding: '10px 12px', textAlign: 'center' }}>Issued to Guards</th>
              <th style={{ padding: '10px 12px', textAlign: 'center' }}>Available Stock</th>
              <th style={{ padding: '10px 12px', textAlign: 'right' }}>Inventory Status</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((ast, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '12px', fontWeight: 700, color: '#0f172a' }}>{ast.item}</td>
                <td style={{ padding: '12px', textAlign: 'center', color: '#475569' }}>{ast.totalStock}</td>
                <td style={{ padding: '12px', textAlign: 'center', color: '#0284c7', fontWeight: 700 }}>{ast.issued}</td>
                <td style={{ padding: '12px', textAlign: 'center', fontWeight: 800, color: '#047857' }}>{ast.available}</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>
                  <span className={`status-badge status-${ast.status === 'Normal' ? 'compliant' : 'warning'}`}>
                    {ast.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

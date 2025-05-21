import Header from "./Header";


export default function Layout({ children }:{ children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="py-8">{children}</main>
    </div>
  );
}

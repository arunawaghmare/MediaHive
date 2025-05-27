export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>About Section</h2>
      {children}
    </div>
  );
}

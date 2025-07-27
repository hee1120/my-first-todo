interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};

export default PageLayout;

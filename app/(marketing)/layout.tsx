/**
 * Renders the marketing page top level layout component.
 *
 * TODO: Add a Navbar component.
 * TODO: Add a Footer component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {React.ReactNode} The rendered marketing layout component.
 */
const MarketingLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
    return (
      <div className="h-full bg-slate-100">
        {/* Navbar */}
        <main className="pt-40 pb-20 bg-slate-100">
            {children}
        </main>
        {/* Footer */}
      </div>
    );
  };

  export default MarketingLayout;
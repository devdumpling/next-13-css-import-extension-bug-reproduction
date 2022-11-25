/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <p>
        This page does not load styles as it imports the bundled styles without
        the extension
      </p>
      <code>import "ui/styles"</code>
    </div>
  );
}

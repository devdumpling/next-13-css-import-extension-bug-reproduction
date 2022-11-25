/** Add your relevant code here for the issue to reproduce */
export default function WithExtension() {
  return (
    <div>
      <p>
        This page loads styles as it imports the bundled styles with the
        extension
      </p>
      <code>import "ui/styles.css"</code>
    </div>
  );
}

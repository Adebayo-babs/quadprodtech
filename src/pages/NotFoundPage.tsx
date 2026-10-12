import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section center">
      <div className="container">
        <h1 style={{ fontSize: 40, color: "var(--navy)" }}>Page not found</h1>
        <p style={{ marginTop: 12, color: "var(--muted)" }}>
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn btn-yellow" style={{ marginTop: 26 }}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}

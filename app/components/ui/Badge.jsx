export function Badge({ children, className = "" }) {
  return (
    <span className={`badge ${className}`}>
      {children}
    </span>
  );
}

export function BadgeList({ items, projectSlug, className = "" }) {
  return (
    <div className={`badge-list ${className}`}>
      {items.map((item) => (
        <Badge key={projectSlug ? `${projectSlug}-${item}` : item}>
          {item}
        </Badge>
      ))}
    </div>
  );
}
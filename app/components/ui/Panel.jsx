export function Panel({ children, className = "", ...props }) {
  return (
    <article className={`panel reveal ${className}`.trim()} {...props}>
      {children}
    </article>
  );
}

export function PanelSection({ eyebrow, title, children }) {
  return (
    <Panel>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </Panel>
  );
}
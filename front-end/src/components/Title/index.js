import "./title.css";

export default function Title({ children, name, childrenend }) {
  return (
    <div className='title'>
      {children}
      <span>{name}</span>
      {childrenend}
    </div>
  );
}

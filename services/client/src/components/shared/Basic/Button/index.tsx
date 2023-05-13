interface iProps {
  children: string
}

const Button = (props: iProps) => {
  return <button>{props.children}</button>
};

export default Button;
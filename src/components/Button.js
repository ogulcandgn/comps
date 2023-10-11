import className from "classnames";

//*children : prop aldığımız yerdeki button etiketleri arasında ne varsa olduğu gibi alır
function Button({
  children,
  primary,
  success,
  danger,
  warning,
  secondary,
  rounded,
  outline,
  //daha önceki propları tutar
  ...rest
}) {
  const classes = className(
    //* rest olan classları, className'e aktarıyoruz
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "rounded-md": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && danger,
    }
  );

  return (
    //* burada önce ...rest daha sonra className eklememiz lazım yoksa verdiğimiz class'lar geçersiz olur
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: (props) => {
    console.log(props);
  },
};

export default Button;

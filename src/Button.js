import PropTypes from "prop-types";

//children : prop aldığımız yerdeki button etiketleri arasında ne varsa olduğu gibi alır
function Button({
  children,
  primay,
  success,
  danger,
  warning,
  rounded,
  outline,
}) {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}

Button.propTypes = {
  checkVariationValue: (props) => {
    console.log(props);
  },
};

export default Button;

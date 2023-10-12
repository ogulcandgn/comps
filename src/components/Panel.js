//*Panel'in amacı yinelenen classları tekrar tekrar yazmamak için tek bir kere yazıp, farklı yerlerde kullanmak
import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;

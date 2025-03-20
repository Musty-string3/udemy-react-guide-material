import { memo } from "react";

const Child = memo(({ countB }) => {
  console.log("%cChild render", "color: red;");
  return (
    <div className="child">
      <h3>子コンポーネント領域</h3>
      <p>ボタンBクリック回数：{countB}</p>
    </div>
  );
});

export default Child;

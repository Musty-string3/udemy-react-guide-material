// import { useReducer } from "react";

import { useReducer } from "react";

// const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

// const reducer = (state, { type, payload}) => {
//   switch (type) {
//     case "change":
//       return { ...state, [payload.name]: payload.value };
//     case "add":
//       return { ...state, result: state.a + state.b };
//     case "minus":
//       return { ...state, result: state.a - state.b };
//     case "divide":
//       return { ...state, result: state.a * state.b };
//     case "multiply":
//       return { ...state, result: state.a / state.b };
//     default:
//       throw new Error("不明なエラーが発生しました。");
//   }
// }

// const Example = () => {
//   const initState = {
//     a: 1,
//     b: 2,
//     result: 3
//   }
//   const [ state, dispatch ] = useReducer(reducer, initState);

//   const calculate = (e) => {
//     dispatch({ type: e.target.value})
//   };

//   const numChangeHandler = (e) => {
//     dispatch({
//       type: "change",
//       payload: {
//         name: e.target.id,
//         value: e.target.value
//       }
//     });
//   }

//   return (
//     <>
//       <div>
//         <label htmlFor="a">a:</label>
//         <input
//         type="number"
//         id="a"
//         value={state.a}
//         onChange={numChangeHandler}
//         />
//       </div>
//       <div>
//         <label htmlFor="b">b:</label>
//         <input
//         type="number"
//         id="b"
//         value={state.b}
//         onChange={numChangeHandler}
//         />
//       </div>
//       <select name="select" id="ab" onChange={calculate}>
//         {
//           CALC_OPTIONS.map((calc) => {
//             return <option key={ calc } value={calc}>{calc}</option>
//           })
//         }
//       </select>
//       <div>
//         <h3>結果：{ state.result }</h3>
//       </div>
//     </>
//   );
// };

// export default Example;


const reducer = (state, { type, payload }) => {
  switch (type) {
    case "result": {
      console.log(`type:${state.type}`);
      console.log(state.type === "add");
      switch (state.type) {
        case "add": {
          return { ...state, result: Number(state.a) + Number(state.b)  };
        }
        case "minus": {
          return { ...state, result: state.a - state.b  };
        }
        case "divide": {
          return { ...state, result: state.a * state.b  };
        }
        case "multiply": {
          return { ...state, result: state.a / state.b  };
        }
      }
    }
    case "numChange": {
      return { ...state, [payload.name]: payload.value  };
    }
    case "typeChange": {
      return { ...state, type: payload  };
    }
    default:
      throw new Error("予期しないエラーが発生しました。");
      return { ...state };
  }
}

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
    type: "add",
  };

  const [ state, dispatch ] = useReducer(reducer, initState);

  const numChange = (e) => {
    dispatch({ type: "numChange", payload: { name: e.target.id, value: e.target.value } });
  };

  const calculate = (e) => {
    dispatch({ type: "typeChange", payload: e.target.value });
  }

  const resultOutput = () => {
    console.log("result");
    dispatch({ type: "result" });
  }

  return (
    <>
      <div>
        <label htmlFor="a">Number1</label>
        <input type="number" id="a" value={ state.a } onChange={numChange}/>
      </div>
      <div>
        <label htmlFor="b">Number2</label>
        <input type="number" id="b" value={ state.b } onChange={numChange}/>
      </div>
      <div>
        <select id="select" onChange={calculate}>
          {
            CALC_OPTIONS.map(type => {
              return <option key={type} value={type}>{ type }</option>
            })
          }
        </select>
      </div>
      <div>
        <h3>結果：{ state.result }</h3>
      </div>
      <button onClick={resultOutput}>出力</button>
    </>
  )
}

export default Example;

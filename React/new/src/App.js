import logo from './logo.svg';
import './App.css';
import Developer from './Developer';




// function App() {
//   function myFun(){
//     alert("Like");
//   }
//   return (

//     <div>
//       {/* <h3>My Name is Anubhav Singh</h3>
//       <p> This is a Paragraph</p>
//       <h1>Spots</h1>
//       <ol>
//         <li>HP</li>
//         <li>UP</li>
//         <li>AP</li>
//       </ol>
//       <input type="checkbox"></input><br></br>
//       <input type="checkbox"></input><br></br>
//       <input type="checkbox"></input>

//       <h2>this is the book</h2>
//       <a href="https://www.amazon.com/dp/0803730470/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-6&pf_rd_r=9VB53ZNEQP3RDQ5KGA5J&pf_rd_t=101&pf_rd_p=f870448f-0db4-455d-98e9-7b0c0b515197&pf_rd_i=13270229011" target="_blank"><b>Go to Website</b></a><br></br>
//       <img src="https://images-na.ssl-images-amazon.com/images/I/51ywsuQFt4L._SX398_BO1,204,203,200_.jpg"></img> */}
    

//       <ul>
//         <li><button onClick={myFun}>Hi</button></li>
//         <li></li>
//         <li></li>
//       </ul>
      

//     </div>
//   );
// }



// export default function MyName(){
//   <div>
//       <h3>Anubhav Singh</h3>
//       <p> This is a Paragraph </p>
//       <h1>Spots</h1>
//       <ol>
//         <li>HP</li>
//         <li>UP</li>
//         <li>AP</li>
//       </ol>
//     </div>
//   return(
//     MyName()

//   );
// }

function App()
{
    return(
        <div className="App">
            <h1>Props in React</h1>
            <Developer />
        </div>
    );
}


export default App;


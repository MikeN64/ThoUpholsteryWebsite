import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tho Nguyen</h1>
      <h4>Work Address: 341 Washington St, Brighton, MA 02135</h4>
      <h4>Work Phone: (617) 783-0454</h4>
      <h4>Email: thonguyen737@gmail.com</h4>
      <p>
        Hours: Monday-Friday  9AM-5PM  | Saturaday 9AM-2PM  | Sunday Closed
      </p>

      <div>
        {/* <!-- Gallery Section --> */}
        <div className='row'>

          {/* <!-- Column 1 --> */}
          <div className='col-sm'>
            <img className='pic' src='pics/image_0.jpg' />
            <img className='pic' src='pics/image_1.jpg' />
            <img className='pic' src='pics/image_2.jpg' />
            <img className='pic' src='pics/image_3.jpg' />
            <img className='pic' src='pics/image_4.jpg' />
            <img className='pic' src='pics/image_5.jpg' />
            <img className='pic' src='pics/image_6.jpg' />
            <img className='pic' src='pics/image_7.jpg' />
            <img className='pic' src='pics/image_8.jpg' />
            <img className='pic' src='pics/image_9.jpg' />
            <img className='pic' src='pics/image_10.jpg' />
            <img className='pic' src='pics/image_12.jpg' />
            <img className='pic' src='pics/image_13.jpg' />
            <img className='pic' src='pics/image_42.jpg' />
          </div>

          {/* <!-- Column 2 --> */}
          <div className='col-sm'>
            <img className='pic' src='pics/image_14.jpg' />
            <img className='pic' src='pics/image_15.jpg' />
            <img className='pic' src='pics/image_16.jpg' />
            <img className='pic' src='pics/image_17.jpg' />
            <img className='pic' src='pics/image_18.jpg' />
            <img className='pic' src='pics/image_19.jpg' />
            <img className='pic' src='pics/image_20.jpg' />
            <img className='pic' src='pics/image_21.jpg' />
            <img className='pic' src='pics/image_22.jpg' />
            <img className='pic' src='pics/image_23.jpg' />
            <img className='pic' src='pics/image_24.jpg' />
            <img className='pic' src='pics/image_25.jpg' />
            <img className='pic' src='pics/image_26.jpg' />
            <img className='pic' src='pics/image_27.jpg' />
          </div>

          {/* <!-- Column 3 --> */}
          <div className='col-sm'>
            <img className='pic' src='pics/image_11.jpg' />
            <img className='pic' src='pics/image_28.jpg' />
            <img className='pic' src='pics/image_29.jpg' />
            <img className='pic' src='pics/image_30.jpg' />
            <img className='pic' src='pics/image_31.jpg' />
            <img className='pic' src='pics/image_32.jpg' />
            <img className='pic' src='pics/image_33.jpg' />
            <img className='pic' src='pics/image_34.jpg' />
            <img className='pic' src='pics/image_35.jpg' />
            <img className='pic' src='pics/image_36.jpg' />
            <img className='pic' src='pics/image_37.jpg' />
            <img className='pic' src='pics/image_38.jpg' />
            <img className='pic' src='pics/image_39.jpg' />
            <img className='pic' src='pics/image_40.jpg' />
            <img className='pic' src='pics/image_41.jpg' />
          </div>


        </div>
      </div>

      <footer>@Copyright 2021</footer>
    </div>
  );
}

export default App;

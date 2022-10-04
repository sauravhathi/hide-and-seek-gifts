const Main = () => {

    const giftimg = require('../assets/giftbox.png');
    const dangerimg = require('../assets/danger.png');
    const miss = require('../assets/miss.png');
    const empty = require('../assets/empty.png');

    const obj = {
        giftimg,
        dangerimg,
        miss,
        empty
    }

    const randomobj = () => {
        const keys = Object.keys(obj);
        const randomkey = keys[Math.floor(Math.random() * keys.length)];
        return obj[randomkey];

    }

    const reload = () => {
        window.location.reload();
    }

    return (
        <div
            className="grid gap-4 justify-center"
        >
             <h1 className="text-4xl text-center font-bold mt-2 mb-2">Hide and Seek Gifts Game</h1>
            <div className="bg-blue-300 p-10">

               

                <div className="grid grid-cols-1 gap-4 justify-center justify-items-center
  
                ">
                    <div>
                        <ul className="flex items-center justify-around">
                            <li className=" bg-slate-50 text-center p-2 border-2 border-black mb-2 ml-12 px-4">0</li>
                            <li className=" bg-slate-50 text-center p-2 border-2 border-black mb-2 ml-8 px-4">1</li>
                            <li className=" bg-slate-50 text-center p-2 border-2 border-black mb-2 ml-8 px-4">2</li>
                            <li className=" bg-slate-50 text-center p-2 border-2 border-black mb-2 ml-8 px-4">3</li>
                            <li className=" bg-slate-50 text-center p-2 border-2 border-black mb-2 ml-8 px-4">4</li>
                            <li className=" bg-slate-50 text-center p-2 border-2 border-black mb-2 ml-8 px-4">5</li>

                        </ul>
                    </div>
                    <div>
                        <table className="table-auto">
                            <tbody>

                                {
                                    ['A', 'B', 'C', 'D', 'E', 'F'

                                    ].map((row, index) => {
                                        return (
                                            <tr key={index}>
                                                <li className="bg-slate-50 border-2 border-black p-2 px-4 mt-4 mr-4 list-none">{row}</li>
                                                {
                                                    [0, 1, 2, 3, 4, 5].map((col, index) => {
                                                        return (
                                                            <td key={index} className="border border-black p-2">
                                                                <img src={randomobj()} alt="Saurav Hathi" />
                                                            </td>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                    <div>


                        <div className="flex justify-center ml-64
                        
                        rounded-lg drop-shadow-lg items-center
                        
                        bg-sky-600 p-2">
                            <input type="text" className="border-2 border-black text-center ml-4
                            h-8
                            "
                                maxLength={2}
                            />
                            <button className="bg-black border-2 border-white text-white p-2 px-6 ml-2 rounded-full"

                                onClick={reload}
                            >Guess</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
};

export default Main;

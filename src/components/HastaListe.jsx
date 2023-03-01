import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const HastaListe = ({ hastalar, setHastalar }) => {
    return (
        <div>
            {hastalar.map((hasta) => {

                return (
                    <div >
                        <div className={hasta.bittiMi ? "trueBittiStil" : "falseBitmediStil"}
                            key={hasta.id}
                            onDoubleClick={() => setHastalar(hastalar.map((i) => i.id === hasta.id ? { ...i, bittiMi: !i.bittiMi } : i))}
                        >
                            <div>
                                <h2>{hasta.text} </h2>
                                <h4>{hasta.day} </h4>
                                <h3>{hasta.doktorum} </h3>
                            </div>

                            <FaTimesCircle style={{ color: "red" }} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default HastaListe;

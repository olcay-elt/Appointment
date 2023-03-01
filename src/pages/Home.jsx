import { useState } from "react";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";
import Data from "../helper/Data";

const Home = () => {
    let initial = [
        {
            id: 0,
            doktor: "DR Ahmet Bilen",
            resim:
                "https://i.cnnturk.com/i/cnnturk/75/0x555/54857220f97adb1aa472e5e6",
        },
        {
            id: 1,
            doktor: "DR Ayse Okur",
            resim:
                "https://i3.posta.com.tr/i/posta/75/750x0/616f757845d2a0b25401f0e1",
        },
        {
            id: 2,
            doktor: "DR Fatma Adil",
            resim:
                "https://i4.hurimg.com/i/hurriyet/75/0x0/5efd779645d2a04258b8f1cc.jpg",
        },
        {
            id: 3,
            doktor: "DR Oya Başar",
            resim:
                "https://im.haberturk.com/2019/09/12/2521591_720f96f71c734286b9c93122b8bbd70c_640x640.jpg",
        },
    ];

    const [hastalar, setHastalar] = useState(Data)
    const [doktorlar, setDoktorlar] = useState(initial)

    const [buton, setButon] = useState(true)

    const doktorClick = (id) => {
        setButon(!buton)
        // console.log([doktorlar.filter((i) => i.id === id)][0]);
        setDoktorlar([doktorlar.filter((i) => i.id === id)][0]);
    }

    return (
        <div style={{ display: buton ? "block" : "flex" }}>
            <div>
                <header className="header">
                    <h1>HOSPİTAL</h1>
                    <div className="dr">
                        {doktorlar.map((dr) => (
                            <div key={dr.id}>
                                <img
                                    src={dr.resim}
                                    alt=""
                                    width="180px"
                                    height="150px"
                                    className="btn"
                                    style={{ backgroundColor: buton ? "aqua" : "lightgreen" }}
                                    onClick={() => doktorClick(dr.id)}
                                />
                                <h4
                                    style={{
                                        backgroundColor: buton ? "aqua" : "lightgreen",
                                        borderLeft: `10px solid ${buton ? "blue" : "green"}`,
                                    }}
                                >
                                    {dr.doktor}
                                </h4>
                            </div>
                        ))}
                    </div>
                </header>

                {buton === false && (
                    <HastaEkle hastalar={hastalar} setHastalar={setHastalar} />
                )}


            </div>

            <HastaListe hastalar={hastalar} setHastalar={setHastalar} />
        </div>
    );
};

export default Home;

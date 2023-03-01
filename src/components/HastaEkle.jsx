const HastaEkle = () => {
  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="text">Hasta Bilgileri</label>

          <input
            id="text"
            type="text"
            placeholder="Add Name"
            name="text"
            value=""
          />
        </div>

        <div className="form-control">
          <label htmlFor="day">Day & Time</label>

          <input id="day" type="date" name="day" value="" />
        </div>

        <div>
          <button className=" dok btn btn-submit" type="submit">
            <span style={{ color: "#6a0707" }}>ayse</span> İçin Kayıt Oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default HastaEkle;

import './Menubar.css';

function Menubar({ image, changeMenuFunction }) {
  return (
    <div className="menubar" onClick={changeMenuFunction}>
      <img src={image} alt="Menu Icon" />
    </div>
  );
}

export default Menubar;

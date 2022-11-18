const CardMember = ({ styleProp, title, parg, alt, image, name, desc, price }) => {
  return (
    <div className={styleProp.poster}>
      <h1 className={styleProp.title}>{title}</h1>
      <p className="subheading">{parg}</p>
      <img className={styleProp.mugshot} src={image} alt={alt} />
      <p className="name">{name}</p>
      <p className="description">{desc}</p>
      <h2>Reward</h2>
      <div id="price">{price}</div>
    </div>
  );
};

export default CardMember;

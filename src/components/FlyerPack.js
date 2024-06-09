import Image from 'react-bootstrap/Image';

function FlyerPack({ month }) {

    const monthParts = month.split("-");
    const year =  monthParts[0]
    const monthName = new Date(2002, monthParts[1] -1 , 1).toLocaleString("en-US", { month: "long" })

    return (
      <div className="flyer-pack">
        <div className="flyer-pack-title">{year} {monthName}</div>
        <div className="flyer-pack-flyers">
            
            <Image className="flyer-front"
                src={`/images/flyers/${month}-front.jpg`} 
                onError={event => {
                    event.target.src = "/images/flyers/flyer-front-missing.jpg"
                    event.onerror = null
                }} 
                text="Front" fluid 
            />
            <Image 
                src={`/images/flyers/${month}-back.jpg`}
                onError={event => {
                    event.target.src = "/images/flyers/flyer-back-missing.jpg"
                    event.onerror = null
                }} 
                text="Back" fluid />
        </div>
      </div>
    );
  }
  
  export default FlyerPack;
  
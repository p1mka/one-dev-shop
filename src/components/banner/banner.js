import { useEffect, useState } from "react";
import styled from "styled-components";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";

const BannerContainer = ({ className }) => {
  const banners = [image1, image2, image3];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [banners.length]);

  return (
    <div className={className}>
      <img
        className="banner"
        key={currentBanner}
        src={banners[currentBanner]}
        alt={`Баннер ${currentBanner + 1}`}
      />
    </div>
  );
};

export const Banner = styled(BannerContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 6rem;

  & .banner {
    width: 50%;
    object-fit: cover;
    animation: fadein 1s ease-in;
    border-radius: 0.5rem;
  }
  & .banner:not(:first-child) {
    animation: fadeout 1s ease-in-out;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

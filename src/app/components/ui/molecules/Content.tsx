import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { ContentStyles } from "../../styles/Content.style";
import unsplash from "../../../api/unsplash";
import { StoreContext } from "../../../context/store";
import Loader from './Loader';

export interface PHOTOS {
  [propsName: string]: any;
}

const Content: React.FC = () => {
  const [photos, setPhotos] = useState<Record<string, any>[]>([]);
  const ctx = useContext(StoreContext);
  const { searchTerm, setIsLoading, isLoading } = ctx;
  

  useEffect(() => {

    const getPictures = async () => {
      try {
        const { data } = await unsplash.get(
          `/search/photos/?page=1&per_page=10&query=${searchTerm || "people"}`
        );
        console.log(data);

        if (data.results.length === 0) {
          console.log("No result");
        }

        setPhotos(data.results);
        setIsLoading(false);
      } catch (error) {
          setIsLoading(false)
      }
    };
    getPictures();
  }, [searchTerm, setIsLoading]);

  useEffect(() => {
    if (photos.length > 0) {
      setIsLoading(false);
    }
  }, [isLoading, photos, setIsLoading]);
  return (
    <ContentStyles>
      {photos.length > 0 ? (
        photos.map((photo) => <Card key={photo.id} photo={photo} />)
      ) : (
        <Loader />
      )}
    </ContentStyles>
  );
};

export default Content;

import React from 'react';
import Img from 'gatsby-image';

const getImage = (images: any, name: string) =>
  images.find(image => image.node.fluid.originalName === name);

const MapsPage = ({ images }) => {
  return (
    <nav className="columns is-multiline">
      <div
        className="column"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className="card">
          <a
            className="card-image"
            href="https://public.tableau.com/views/REACH_SSD_INT/INT?:showVizHome=no"
          >
            <Img
              fluid={{
                ...getImage(images, 'ssd-int.png').node.fluid,
                aspectRatio: 4 / 3,
              }}
              alt="Placeholder image"
            />
          </a>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">SSD INT</p>
              </div>
            </div>
            <div className="content">
              Model showing current needs across the key life saving clusters in
              South Sudan.
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MapsPage;

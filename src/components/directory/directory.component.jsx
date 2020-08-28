import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.pinimg.com/474x/e1/36/2d/e1362d4974f4d14bce62752605262b94.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.pinimg.com/564x/df/81/ad/df81ad2d18ebe4c996522177f60b2d67.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.pinimg.com/474x/24/d7/1a/24d71a7b4d94bf18314817911a4c9d51.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.pinimg.com/474x/b6/62/54/b662549d1fda8e983d0ded2b06475c05.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.pinimg.com/564x/bd/6a/55/bd6a550c23fd8bb650161eabdd4446b9.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }



    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,imageUrl,id}) => (
                        <MenuItem key={id} title ={title} imageUrl={imageUrl} />
                    ))
                }
            </div>
        )
    }
 }


 export default Directory;
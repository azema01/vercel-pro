import React from 'react';
import { IMenu } from './App';

interface IHeaderProps {
    menu: IMenu[]
}

const Header: React.FC<IHeaderProps> = (props) => {
    const [content, setContent] = React.useState<string>('Home')

    const handleClick = (block: string) => {
        setContent(block)
    }

    return (
        <div>
            {props.menu.map((menu) => <a onClick={(e) => {
                e.preventDefault()
                handleClick(menu.name)
            }}
                key={menu.name}
                href={menu.path}> {menu.name}
            </a>)}

            <div>
                <br />
                <br />
                {content === "Home" && <h3>Home Content</h3>}
                {content === "About" && <h3>About Content</h3>}
                {content === "Contact" && <h3>Contact Content</h3>}
            </div>
        </div>
    )
}

export default Header
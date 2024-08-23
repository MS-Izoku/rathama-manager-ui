import React, {useState} from 'react'
import TextEditor from './TextEditor';

const CardCreatorForm = props => {

    // Define state for each attribute in the form
    const [name, setName] = useState(props.name ? props.name : "");
    const [cardText, setCardText] = useState(props.cardText ? props.cardText : "");
    const [cost, setCost] = useState(0);
    const [flavorText, setFlavorText] = useState('');
    const [rarity, setRarity] = useState('');
    const [type, setType] = useState('');
    const [attack, setAttack] = useState(0);
    const [health, setHealth] = useState(0);
    const [armor, setArmor] = useState(0);
    const [durability, setDurability] = useState(0);
    const [expansionId, setExpansionId] = useState(1); // Default value as per your schema
    const [isGeneratedCard, setIsGeneratedCard] = useState(false);
    const [deckSizeModifierType, setDeckSizeModifierType] = useState('None'); // Default value as per your schema
    const [deckSizeModifierValue, setDeckSizeModifierValue] = useState(0);
    const [cardArt, setCardArt] = useState(null); // For handling image upload

    const [expansions, setExpansions] = useState([{id: 0, name: "Base Game"}])


    const getExpansions = async (e) => {
        expansions = [{id: 0, name: "Base Game"}]
        setExpansions(expansions)
    }

    const ExpansionDropdown = () => {
        const optionElement = (expansionData) => <option value={expansionData.id}>{expansionData.name}</option>

        return <select onChange={()=>{}}>{ expansions.map(expansion => <option value={expansion.id}>{expansion.name}</option>) }</select>
    }


    return <form onSubmit={props.onSubmit}>
    <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>

    <div>
        <label>Card Text:</label>
        <TextEditor title="Card Text"></TextEditor>
    </div>

    <div>
        <label>Cost:</label>
        <input type="number" value={cost} onChange={(e) => setCost(Number(e.target.value))} />
    </div>

    <div>
        <label>Flavor Text:</label>
        {/* <textarea value={flavorText} onChange={(e) => setFlavorText(e.target.value)} /> */}
        <TextEditor title="Flavor Text"></TextEditor>
    </div>

    <div>
        <label>Rarity:</label>
        <select>
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Epic">Epic</option>
            <option value="Legendary">Legendary</option>
            <option value="Artifact">Artifact</option>
        </select>
    </div>

    <div>
        <label>Type:</label>
        {/* <input type="text" value={type} onChange={(e) => setType(e.target.value)} /> */}
        <select>
            <option value="FiendCard">Fiend</option>
            <option value="SpellCard">Spell</option>
            <option value="TrapCard">Trap</option>
            <option value="MonumentCard">Monument</option>
            <option value="HeroCard">Hero</option>
            <option value="WeaponCard">Weapon</option>
        </select>
    </div>

    <div>
        <label>Attack:</label>
        <input type="number" value={attack} onChange={(e) => setAttack(Number(e.target.value))} />
    </div>

    <div>
        <label>Health:</label>
        <input type="number" value={health} onChange={(e) => setHealth(Number(e.target.value))} />
    </div>

    <div>
        <label>Armor:</label>
        <input type="number" value={armor} onChange={(e) => setArmor(Number(e.target.value))} />
    </div>

    <div>
        <label>Durability:</label>
        <input type="number" value={durability} onChange={(e) => setDurability(Number(e.target.value))} />
    </div>

    <div>
        <label>Expansion:</label>
        <ExpansionDropdown/>
    </div>

    <div>
        <label>Is Generated Card:</label>
        <input
            type="checkbox"
            checked={isGeneratedCard}
            onChange={(e) => setIsGeneratedCard(e.target.checked)}
        />
    </div>

    <div>
        <label>Deck Size Modifier Type:</label>
        <input
            type="text"
            value={deckSizeModifierType}
            onChange={(e) => setDeckSizeModifierType(e.target.value)}
        />
    </div>

    <div>
        <label>Deck Size Modifier Value:</label>
        <input
            type="number"
            value={deckSizeModifierValue}
            onChange={(e) => setDeckSizeModifierValue(Number(e.target.value))}
        />
    </div>

    <div>
        <label>Card Art:</label>
        <input type="file" onChange={(e) => setCardArt(e.target.files[0])} />
    </div>

    <input type="submit" value={"Create Card"}/>
</form>

}

export default CardCreatorForm
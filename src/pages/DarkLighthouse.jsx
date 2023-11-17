import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import RedditReadMore from '../components/redditReadmore/RedditReadMore'

const DarkLighthouse = () => {
    return (
        <>
        <Box sx={{ width: "85%", marginTop: "50px", marginX: "auto", color: "white" }}>
            <Typography variant='h2' sx={{ fontSize: 30 }}>
                A lighthouse makes light; so just for a lark, I built me a darkhouse. A darkhouse makes dark.
            </Typography>

            <Typography className='mt-4'>Jun 8, 2023</Typography>
            <Typography className='mt-4'>
                Since before man had memory, the Obelisks of Light have stood upon the shores of the Sunset Ocean, jutting from clifftops, from rocky promontories, from the coastal swamps and the pristine white sands of far west Nymeria.
            </Typography>

            <Typography className='mt-4'>
                It was to Stardock that the wizards came, when the end of the war opened Nymeria's borders, to study the seamless, glowing monoliths. Few were they, for wizards are few in number, but among those who made the journey were the greatest of their kind — Asterion, Caleb of the Isle of Trees, Jubal the Faceless, tall and lean, who went everywhere masked, and his former apprentice, The Whore, though none could say why she called herself so, for she dressed modestly, spurned the advances of men, and did not frequent low places. 
            </Typography>

            <Typography className='mt-4'>
                For many months they camped upon the beaches, in their tent city of silk pavilions and wondrous traveling mansions, whilst they pried and poked with their mysterious instruments, and peered with their lenses of Kavidian glass. Many rituals were chanted under the light of the full moons, and a marketplace sprang up outside the city, booths lashed together from old lumber by the local men of the city, selling all manner of things, fine parchment and bee's-wax candles to the wizards, and soap and charcoal to their many servants, fresh fish, and eggs, and saltrice, and needles made of fine steel. 
            </Typography>

            <Typography className='mt-4'>
                But none could pierce the secrets of the towers, could enter into them or even say for certain if a space lay within. Nor could they explain the soft light they cast from dusk til dawn, lining the shore in a warm amber glow that kept the fishing fleet safe from rock and reef.
            </Typography>

            <Typography className='mt-4'>
                And one by one, wizards left. Packing their hundred-yard silk canopies into coin pouches, striding away in their houses on fowl's legs, mounting clockwork horses, or simply vanishing one morning with all their pavilions and pennants and guardsmen and uniformed maidservants. 
            </Typography>

            <Typography className='mt-4'>
                Until only Moriel the Shrike remained. 
            </Typography>

            <Typography className='mt-4'>
                Moriel the strange, who wore the warpwood ring given to each year's top graduate of the Collegium, yet dressed in the homespun weave and straw hat of a tradesman or yeoman farmer. Who had solved the secret of the Philosopher's Stone, yet made no gold, but threw it into the sea, declaring he had saved the land from "puffiness". Who summoned a mighty Boredom Elemental, the only such thing ever seen, to end the siege of Karlschadt. Who liked to sleep late, and hated the sound of church bells, for once climbed the Pinnacle of Bells in the City of Seven Bright Rings, and inscribed a rune of silence upon the great Vox Dei bell of Emperor Cadmon the Third, causing it to ring out in great hushes that canceled all sound for many miles.
            </Typography>

            <Typography className='mt-4'>
                Surely if any wise man could solve the riddle of the Obelisks, it would be he. Yet he studied them not, merely spent his days drinking in taverns, gambling with sailors and longshoremen, dallying with the local peasant girls, and bargaining with scavengers and trash pickers, paying absurd sums for the broken bits of ancient glass particular to the region. 
            </Typography>

            <Typography className='mt-4'>
                Finally, one day, as the last of the other wizards packed their strange households, he announced, yelling out loud in the market as if all the world were his messenger and secretary, that he had solved the riddle of the towers and could duplicate them at will. 
            </Typography>

            <Typography className='mt-4'>
                Dux Lyonis of Stardock, eager to expand his coastal trade, granted the eccentric sage all that he asked for in money, in workmen, in strange and exotic materials and reagents bought from the vollenlurks at ruinous prices. For months the Shrike labored, sometimes directing teams of workmen until there was no more light to work by, sometimes spending days locked in the alchemical lab he set up in the entire rented top floor of the Goat and Compass public house. 
            </Typography>

            <Typography className='mt-4'>
                Finally, the great spire was complete. Not identical to the others, not the seamless and impervious opaque amber glass wrought by the Elder Ones, but beautiful nonetheless, with its intricate and chaotic working of matched stones, no two alike in shape or color, but tightly matched together, such that a knife could not be inserted between them, ordered in strange and eye-catching patterns that none save he knew the meaning of. 
            </Typography>

            <Typography className='mt-4'>
                Yet, on the great day at sunset, when all were gathered upon the beach, the Duke on his fine horse with a regiment of servants and clerks, a crowd of curious cityfolk, a smattering of remaining wizards... nothing happened. The tower did not glow, nor hum, nor do anything at all which an ordinary edifice of wrought stone would not do. 
            </Typography>

            <Typography className='mt-4'>
                Furiously, the Shrike tinkered and checked his calculations as his noble patron grew impatient, then wroth, then departed, murmuring dark implications he was not fool enough to make into threats with so many wizards watching. And all through the night the master wizard worked, making mighty rituals, and summoning up and questioning such spirits as made his fellow magi quickly pack their remaining possessions and depart in haste, pale-faced and tight-lipped. 
            </Typography>

            <Typography className='mt-4'>
                But it was not until morning that the answer was found. Then the first rays of the dawning sun caught Moriel's strange tower, it finally began to hum, it the same strange key as the ancient structures that line coast with amber light. Yet from its strange walls emerged something different, at first a dimming of the sun's light where it touched the stonework, then a spreading dimness, a shadows, and finally a penumbra of pitch blackness such that within a bowshot's distance, a man's fingers could not be seen before his face. And still the darkness spread. 
            </Typography>

            <Typography className='mt-4'>
                "Oh," said the great sage. "Of course. Sign error."
            </Typography>

            <Typography className='mt-4'>
                The Duke's wrath of the previous evening was nothing to his fury at finding city cloaked in shadow, and all his invested gold and treasure wasted on useless gloom. Not daring to try to offer violence to a wizard of the Collegium, he nevertheless decreed, that the Shrike should be exiled from Stardock for as long as the towers themselves endured, refusing to hear any protestation that the error was a simple one, or any promise to get it right next time. 
            </Typography>

            <Typography className='mt-4'>
                The Shrike, shamefaced and irritated, departed without quarrel, but it should be noted that after the tower was pulled down with ropes and oxen, some mysterious unseen force came in the night and inscribed the city walls, in letters a foot high, with Dux Lyonis's secret — and very bad — attempts at verse.
            </Typography>
        </Box>
        <RedditReadMore/>
        </>
    )
}

export default DarkLighthouse

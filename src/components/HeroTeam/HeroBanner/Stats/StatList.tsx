import { Box } from '@chakra-ui/layout';
import { Stats } from 'node:fs';
import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { BsFillShieldFill } from 'react-icons/bs';
import { CgGym } from 'react-icons/cg';
import { GiBrain, GiRunningShoe } from 'react-icons/gi';
import { RiSwordFill } from 'react-icons/ri';
import { Powerstats } from '../../../../models';
import Stat from './Stat';

interface Props { stats: Powerstats}
//prettier-ignore
const StatList: React.FC<Props> = ({stats}) => {

    return (
        <Box position='absolute' left='0' bottom='0' width='100%'>
            <Stat icon={<RiSwordFill color='white' />} color='red.500' amount={stats.combat} statName='Combat'/>
            <Stat icon={<BsFillShieldFill color='white'/>} color='gray.500' amount={stats.durability} statName='Durability' />
            <Stat icon={<GiBrain color='white'/>} color='blue.500' amount={stats.intelligence} statName='Intelligence' />
            <Stat icon={<AiFillThunderbolt color='white'/>} color='yellow.500' amount={stats.power} statName='Power' />
            <Stat icon={<GiRunningShoe color='white'/>} color='green.500' amount={stats.speed} statName='Speed' />
            <Stat icon={<CgGym color='white'/>} color='purple.500' amount={stats.strength} statName='Strength' />
        </Box>
    );
}

export default StatList;
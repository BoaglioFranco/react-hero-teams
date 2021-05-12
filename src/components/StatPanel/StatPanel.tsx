import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Powerstats } from '../../models';
import StatTag from './StatTag';
import { RiSwordFill } from "react-icons/ri";
import { BsFillShieldFill } from 'react-icons/bs';
import { GiBrain, GiRunningShoe } from 'react-icons/gi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { CgGym } from 'react-icons/cg';

interface Props {stats: Powerstats}

const StatPanel: React.FC<Props> = ({stats}) => {
    const {combat, durability, intelligence, power, speed, strength} = stats;

    return (
        <Flex spacing={2} wrap='wrap'>
            <StatTag statName='Combat' value={combat} icon={RiSwordFill} />
            <StatTag statName='Durability' value={durability} icon={BsFillShieldFill} />
            <StatTag statName='Intelligence' value={intelligence} icon={GiBrain} />
            <StatTag statName='Power' value={power} icon={AiFillThunderbolt} />
            <StatTag statName='Speed' value={speed} icon={GiRunningShoe} />
            <StatTag statName='Strength' value={strength} icon={CgGym} />
        </Flex>
    );
}

export default StatPanel;
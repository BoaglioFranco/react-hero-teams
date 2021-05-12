import { Tag, TagLabel, TagLeftIcon, Tooltip } from '@chakra-ui/react';
import React from 'react';

interface Props {
    statName: string;
    value: string;
    icon: any;
}

const StatTag: React.FC<Props> = ({value, statName, icon }) => {

    return (
        <Tooltip hasArrow label={statName}>
                <Tag variant='outline' size='lg' width='4.8rem' px={2} ml={2} mt={2} justifyContent='center'>
                  <TagLeftIcon as={icon}/>
                  <TagLabel fontWeight='bold'>{value}</TagLabel>
                </Tag>
            </Tooltip>
    );
}

export default StatTag;
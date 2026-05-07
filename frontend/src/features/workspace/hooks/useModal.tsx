import {useState} from 'react';

const useModal = () => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const toggleModel = () => setIsModelOpen(!isModelOpen);
    return { isModelOpen, toggleModel };
}

export default useModal;
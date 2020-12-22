// game level data
export let level = [
  {
      id: 14,
      amount: "₼ 999,999"
  },
  {
      id: 13,
      amount: "₼ 500,000"
  },    
  {
      id: 12,
      amount: "₼ 250,000"
  },    
  {
      id: 11,
      amount: "₼ 125,000"
  },    
  {
      id: 10,
      amount: "₼ 64,000"
  },    
  {
      id: 9,
      amount: "₼ 32,000"
  },    
  {
      id: 8,
      amount: "₼ 16,000"
  },
  {
      id: 7,
      amount: "₼ 8,000"
  },    
  {
      id: 6,
      amount: "₼ 4,000"
  },      
  { 
      id: 5,
      amount: "₼ 2,000"
  },     
  {
      id: 4,
      amount: "₼ 1,000"
  },     
  {
      id: 3,
      amount: "₼ 500"
  }, 
  {
      id: 2,
      amount: "₼ 300"
  },
  {
      id: 1,
      amount: "₼ 200"
  },
   {
      id: 0,
      amount: "₼ 100"
  }
 ] 

 const levelList = document.querySelector('.level-list');
 
// creating DOM elements to display game level data
   export const showList = () => {
    levelList.textContent = '';
        level.map(value => {
            addLevelItems(value)
        })
    }
    const addLevelItems = ({id, amount}) => {
        const itemId = document.createElement('span');
        const itemContent = document.createElement('span');
        const levelListItem = document.createElement('div');

        itemId.setAttribute('class', 'item-id');
        itemContent.setAttribute('class', 'item-content');
        levelListItem.setAttribute('class', 'level-list-item');
        levelListItem.setAttribute('id', `item-${id}`);

        itemId.textContent = id+1;
        itemContent.textContent = amount;

        levelListItem.appendChild(itemId);
        levelListItem.appendChild(itemContent);
        levelList.appendChild(levelListItem);
    }


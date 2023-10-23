import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  // Slice`s name
  name: 'contacts',
  // Initial State of slice`s reducer // Початковий стан редюсера слайсу
  initialState: { contacts: [], filter: `` },
  // Reducers` object //Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

//Actions` generators // Генератори екшенів
export const { addContact, deleteContact, setFilter } = contactSlice.actions;
// Slice`s reducer Редюсер слайсу
export const contactReducer = contactSlice.reducer;

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case `name/add`: {
//       return {
//         ...state,
//         name: action.payload,
//       };
//     }
//     case `number/add`: {
//       return {
//         ...state,
//         number: action.payload,
//       };
//     }
//     case `contact/add`: {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case `contact/delete`: {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case `filter/set`: {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

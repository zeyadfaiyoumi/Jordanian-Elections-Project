const knex = require('knex')(require('../knexfile').development);

const insertListData = async (req, res) => {
  const { logo ,location, district, list_name } = req.body;
 
  // Determine district_id based on location and district
  let district_id;
  if (location === 'amman' && district === 'amman1') {
    district_id = 1; // Amman 1
  } else if (location === 'amman' && district === 'amman3') {
    district_id = 3; // Amman 3
  } else if (location === 'zarqa' && district === 'zarqad') {
    district_id = 6; // Zarqa
  } else {
    return res.status(400).send('Invalid district '+ district_id);
  }

  try {
    console.log("district id equal : "+ district_id);
    // await knex('lists').insert({
    //   list_name: list_name,
    //   district_id: district_id
    // });


    const [newList] = await knex('lists').insert({
      list_name: list_name,
      district_id: district_id,
      logo:logo
    }).returning('list_id');  // this to get list id that was added using insert 

    
    res.status(200).send('Data submitted successfully'+ newList.list_id);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

module.exports = { insertListData };

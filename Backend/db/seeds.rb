puts "🌱 Seeding spices..."
anna = User.create(
  name: "Anna",
  profile_pic: "https://ca.slack-edge.com/T02MD9XTF-U01HDB7FV4K-g4a57c08aae2-512" 
 )

joe = User.create(
  name: "Joe",
  profile_pic: "https://ca.slack-edge.com/T02MD9XTF-U024WJS1J2Z-41c765db6f9f-512"
) 


meal1 = Meal.create(
  name: "Keto Granola",
  imgURL: "https://hungryforinspiration.com/wp-content/uploads/2021/04/Hungry-Keto-Granola-Mobile-Featured-Image-800x675.jpg"

)

meal2 = Meal.create(
  name: "Scrambled Eggs",
  imgURL: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Fcreamy-soft-scrambled-eggs.jpg%3Fitok%3D42x9Mojh"
)

meal3 = Meal.create(
  name: "Bacon",
  imgURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
)

puts "✅ Done seeding!"

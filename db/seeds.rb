# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# added seeds in three rounds
 
 user = ["Rob", "Kisha", "Lulu", "Leo"]

 user.each{ |user| User.create(name: user, description: "I am #{user}. So glad to be here")}

# uses the "sadness ipsum lorem" I created

entry = ["anticipation future exhausted sick panic", "confusion human empty afraid", "dazed stunned", "crushed restless "]

entry.each{ |entry| Entry.create(title: entry, content: "I'm feeling #{entry}. Anyone else feel this way?", user_id: 26)}

entry = ["shock", "empty", "angry", "confused and sad"]

entry.each{ |entry| Entry.create( title: entry, content: "I'm feeling #{entry}. Anyone else feel this way?", user_id: 27)}
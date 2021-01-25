# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bracket.destroy_all
Bracket.create(min: 0, max: 10000, tax: 0)
Bracket.create(min: 10000, max: 20000, tax: 10)
Bracket.create(min: 20000, max: 50000, tax: 20)
Bracket.create(min: 50000, max: 9999999999999, tax: 30)

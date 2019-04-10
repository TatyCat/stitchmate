# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_10_183214) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "patterns", force: :cascade do |t|
    t.string "pattern_name"
    t.string "pattern_link"
    t.string "pattern_notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "steps", force: :cascade do |t|
    t.integer "step_number"
    t.text "pattern_step"
    t.boolean "counter_open"
    t.integer "row_count"
    t.integer "rep_count"
    t.bigint "pattern_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pattern_id"], name: "index_steps_on_pattern_id"
  end

  add_foreign_key "steps", "patterns"
end

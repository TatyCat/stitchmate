class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.integer :step_number
      t.text :pattern_step
      t.boolean :counter_open
      t.integer :row_count
      t.integer :rep_count
      t.belongs_to :pattern, foreign_key: true

      t.timestamps
    end
  end
end

class CreatePatterns < ActiveRecord::Migration[5.2]
  def change
    create_table :patterns do |t|
      t.string :pattern_name
      t.string :pattern_link
      t.string :pattern_notes

      t.timestamps
    end
  end
end

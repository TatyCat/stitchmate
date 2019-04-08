class CreatePatterns < ActiveRecord::Migration[5.2]
  def change
    create_table :patterns do |t|
      t.string :pattern_name
      t.datetime :created_at

      t.timestamps
    end
  end
end

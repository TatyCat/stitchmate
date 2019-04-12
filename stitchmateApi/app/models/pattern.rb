class Pattern < ApplicationRecord
  has_many :steps, dependent: :destroy
end
